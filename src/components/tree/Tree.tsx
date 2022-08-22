import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { TreeNodeProps } from 'antd';
import { Tree as AntTree } from 'antd';
import './style/styles.css';

const Tree = ({
    treeData,
    onSelect,
    onExpand,
    onCheck,
    ...rest
}: TreeNodeProps) => {
    return (
        <div className="tree">
            <AntTree
                switcherIcon={({ expanded }: TreeNodeProps) => (
                    <>
                        {expanded ? (
                            <MinusCircleOutlined />
                        ) : (
                            <PlusCircleOutlined />
                        )}
                    </>
                )}
                checkable
                onSelect={onSelect}
                onExpand={onExpand}
                onCheck={onCheck}
                showLine={{ showLeafIcon: false }}
                treeData={treeData}
                {...rest}
            />
        </div>
    );
};

export default Tree;
