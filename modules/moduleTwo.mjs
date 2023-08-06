import { // в начале файла
    one as oneRenamed, // ИМЕНА ДОЛЖНЫ СОВПАДАТЬ, НО МОЖНО ПЕРЕИМЕНОВЫВАТЬ "... as oneRenamed"
    two,
    sum as sumNew,
} from './moduleOne.mjs'

console.log(oneRenamed); // 1
console.log(two); // 'two'
console.log(sumNew(100, 50)); // 150