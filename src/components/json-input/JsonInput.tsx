import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;

type JsonInputProps = {
    handleSubmit: (value: string) => void;
};

const JsonInput = ({ handleSubmit }: JsonInputProps) => {
    const [error, setError] = useState<'error' | ''>('');
    const [value, setValue] = useState<string>('');
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setValue(value);
        try {
            JSON.parse(value);
            // setValue(JSON.stringify(JSON.parse(value), null, 4));
            setError('');
        } catch (e) {
            // setValue(value);
            setError('error');
            return false;
        }
    }

    function handleBeautify() {
        setValue(JSON.stringify(JSON.parse(value), null, 4));
    }
    return (
        <Space direction="vertical">
            <TextArea
                value={value}
                status={error}
                onChange={handleChange}
                placeholder="Enter/ Paste JSON data here..."
                autoSize
            />
            <Space direction="horizontal">
                <Button
                    type="ghost"
                    disabled={!!error}
                    onClick={handleBeautify}
                >
                    Beautify 🪄
                </Button>
                <Button
                    type="primary"
                    disabled={!!error}
                    onClick={() => handleSubmit(value)}
                >
                    Transform 🚀
                </Button>
            </Space>
        </Space>
    );
};

export default JsonInput;
