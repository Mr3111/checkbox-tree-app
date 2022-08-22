import type { Children, Id, INode, ITreeNode, ParentId } from '../types/Tree';

/**
 * It takes a title and a jsonData array, and returns a tree node with a key and title equal to the title, and children
 * equal to the result of calling getChildren with the title and jsonData
 * @param {Id} title - Id
 * @param {INode[]} jsonData - This is the data that we're going to be using to create the tree.
 * @returns A tree node with a title, key, and children.
 */
function createNode(title: Id, jsonData: INode[]): ITreeNode {
    return {
        children: getChildren(title, jsonData),
        key: title,
        title,
    };
}

/**
 * It takes a parentId and an array of nodes, and returns an array of children
 * @param {ParentId} parentId - ParentId - The parentId of the node we want to get the children of.
 * @param {INode[]} jsonData - The data that we're going to be using to create the tree.
 * @returns An array of objects with the following structure:
 * {
 *     name: string,
 *     children: Children
 * }
 */
function getChildren(parentId: ParentId, jsonData: INode[]): Children {
    return jsonData
        .filter((node) => node.parentId === parentId)
        .map(({ name }) => createNode(name, jsonData));
}

/**
 * It takes a flat array of nodes and returns a tree structure
 * @param {INode[]} jsonData - The data that you want to convert to a tree.
 * @returns An array of ITreeNode objects.
 */
export default function getTreeData(jsonData: INode[]) {
    const nodes: ITreeNode[] = [];
    const roots = getChildren(null, jsonData);
    if (roots) nodes.push(...roots);

    let currRoots = nodes;
    for (let i = 0; i < currRoots.length; i++) {
        const currId = currRoots[i].key;
        currRoots[i].children = getChildren(currId, jsonData);
    }

    return nodes;
}
