type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
 
let joinedArray = {}
let arrayConcat = arr1.concat(arr2)

for (let i of arrayConcat){
    let id = i.id
    joinedArray[id] ? joinedArray[id] = {...joinedArray[id], ...i} : joinedArray[id] = i
}

return Object.values(joinedArray)
};
