import { Button, Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { z } from 'zod';
const { TextArea } = Input;
const { Text } = Typography;

const INode = z.array(
    z.object({
        name: z.string(),
        parentId: z.string().nullable(),
    })
);

type JsonInputProps = {
    handleSubmit: (value: string) => void;
};

type IError = {
    status: 'error' | 'warning' | '';
    message?: string;
};

const JsonInput = ({ handleSubmit }: JsonInputProps) => {
    const [error, setError] = useState<IError>();
    const [value, setValue] = useState<string>('');
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
                    onClick={() => handleSubmit(value)}
                >
                    Transform 🚀
                </Button>
            </Space>
        </Space>
    );
};

export default JsonInput;
