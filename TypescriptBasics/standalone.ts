
// Search for the second highest score in the array and print it to the console.
    const scores: number[] = [45, 89, 12, 99, 76, 99, 88];
    const duplicate: number[] = [...new Set(scores)]
    duplicate.sort((a: number, b: number)=> b-a)
    const sechighno: number = duplicate[1]
    console.log(sechighno)

    