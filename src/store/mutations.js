
export const increment =(state,data) =>{
   return data ? state.count+=data.n : state.count++
}