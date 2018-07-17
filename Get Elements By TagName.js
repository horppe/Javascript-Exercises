function getElementsByTagName(node, childName){
    var children = undefined;
    if (node.childNodes.length) {
        children = node.childNodes;
    }
    else {
        return undefined;
    }
    var filtered = [];
    for(var i = 0; i < children.length; i++){
        if(children[i].localName && children[i].localName == childName){
            filtered.push(children[i]);
        }
    }
    return filtered;
}