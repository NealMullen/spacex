import C from '../constants'

export const Actions = {
    sortByDesc(){
        return {
            type: C.SORT_DESC
        }
    },
    sortByAsc(){
        return {
            type: C.SORT_ASC
        }
    },
    filterByYear(year){
        return {
            type: C.FILTER_YEAR,
            filterYear: year
        }
    },
    showAll(){
        return {
            type: C.SHOW_ALL,
        }
    }
}