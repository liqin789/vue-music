
export const increment =(state,data) =>{
   return data.n ? state.count+=data.n : state.count++
}

export const updateV =(state,data) =>{
      state.count = data
}



