
// export const increment =(context) =>{
//     context.commit('increment')
// }

export const increment =({commit},data=null) =>{
   commit('increment',data || null)
}
