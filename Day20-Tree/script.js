//Class Question 

const mediaTree = {
    name: "media",
    children: [
        {
            name: "images",
            children: [
                {
                    name: "events",
                    children: [
                        {
                            name: "birthday",
                            children: [
                                { name: "cake.png", children: [] },
                                { name: "party.jpg", children: [] },
                            ],
                        },
                    ],
                },
                {
                    name: "wallpapers",
                    children: [
                        { name: "nature.jpg", children: [] },
                        { name: "city.png", children: [] },
                    ],
                },
            ],
        },
        {
            name: "music",
            children: [
                {
                    name: "rock",
                    children: [{ name: "song1.mp3", children: [] }],
                },
            ],
        },
        {
            name: "videos",
            children: [],
        },
    ],
};

// 1. Print All Node Names in the Tree (Depth-First Order)
function printNodeNames(node, depth = 0) {
    const nodeChildrens = node.children;
    console.log("  ".repeat(depth) + node.name);
    for (const children of nodeChildrens) {
        if (typeof children == "object" && children !== null) {
            printNodeNames(children, depth + 1);
        }
    }
}

// 2. Count the Total Number of Nodes in the Tree
function totalNumberOfNodes(node) {
    let count = 1;
    for (const children of node.children) {
        count += totalNumberOfNodes(children);
    }
    return count;
}

// 3. Print Only Leaf Nodes
function leftNodesCount(node) {
    let count = 1;
    for (const children of node.children) {
        if (typeof children === "object" && children == []) {
            count++
        }
        if (typeof children == "object" && children !== null) {
            return count += leftNodesCount(children);
        }

    }
    return count;
}

// 4.  DOM: Print All Tag Names Inside document.documentElement (DFS)
function allTagName(node, depth = 0) {
    console.log("  ".repeat(depth) + node.tagName);
    for (const children of node.children) {
        allTagName(children, depth + 1);
    }
}
// allTagName(document.documentElement);

//5. DOM: Count Total Number of Elements Inside document.body
function totalNumberOfElements(node) {
    let count = 1;
    for (const children of node.children) {
       count += totalNumberOfElements(children);
    }
    return count;
}

