
// export const increment =(context) =>{
//     context.commit('increment')
// }

export const increment =({commit},data) =>{
   commit('increment',data)
}
