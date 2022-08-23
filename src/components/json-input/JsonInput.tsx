import { Button, Input, Space, Typography } from 'antd';
import React from 'react';
import { z } from 'zod';

import type { IError } from '../../App';
const { TextArea } = Input;
const { Text } = Typography;

const INode = z.array(
    z.object({
        name: z.string(),
        parentId: z.string().nullable(),
    })
);

type JsonInputProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    error?: IError;
    setError: React.Dispatch<React.SetStateAction<IError | undefined>>;
    handleTransform: () => void;
};

const JsonInput = ({
    value,
    setValue,
    error,
    setError,
    handleTransform,
}: JsonInputProps) => {
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setValue(value);
        try {
            const data = JSON.parse(value);
            INode.parse(data);
            setError({ status: '' });
        } catch (e: any) {
            setError({
                message:
                    e.name === 'SyntaxError'
                        ? e.message
                        : 'This JSON cannot be converted to tree',
                status: e.name === 'SyntaxError' ? 'error' : 'warning',
            });
            return false;
        }
    }

    function handleBeautify() {
        setValue(JSON.stringify(JSON.parse(value), null, 4));
    }
    // @ts-ignore
    return (
        <Space direction="vertical">
            <TextArea
                value={value}
                status={error?.status}
                onChange={handleChange}
                placeholder="Enter/ Paste JSON data here..."
                autoSize
            />
            {error?.status && (
                <Text type={error.status === 'error' ? 'danger' : error.status}>
                    {error.message}
                </Text>
            )}

            <Space direction="horizontal">
                <Button
                    type="ghost"
                    disabled={error?.status === 'error'}
                    onClick={handleBeautify}
                >
                    Beautify 🪄
                </Button>
                <Button
                    type="primary"
                    disabled={error?.status !== ''}
                    onClick={handleTransform}
                >
                    Transform 🚀
                </Button>
            </Space>
        </Space>
    );
};

export default JsonInput;
