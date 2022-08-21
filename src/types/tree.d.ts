type Id = string;
type ParentId = Id | null;

type INode = {
    name: Id;
    parentId: ParentId;
};

export type Children = ITreeNode[] | null;
export type ITreeNode = {
    children: Children;
    key: Id;
    title: Id;
};
