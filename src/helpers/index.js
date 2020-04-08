import C from "../constants";
import {sortByDesc,sortByAsc} from "../actions";

const Helpers = {
  getUniqueYear(api) {
    let yearSet = new Set();
    let dates = [{ value: null, label: "All" }];
    api.forEach(function (apiItem) {
      yearSet.add(new Date(apiItem.launch_date_utc).getFullYear());
    });
    yearSet.forEach((date) => {
      dates.push({ value: date, label: date });
    });
    return dates;
  },

  sortPosts(state) {
    let { posts, sortBy, filterByYear } = state;
    if (filterByYear != null && filterByYear.value != null) {
      posts = posts.filter(
        (post) =>
          new Date(post.launch_date_utc).getFullYear() === filterByYear.value
      );
    }
    posts = sortBy === C.SORT_ASC ? posts : posts.slice().reverse();
    return posts;
  },

  getSortByAction(sortBy){
    return sortBy === C.SORT_ASC ? sortByDesc() : sortByAsc();
  },
  
  getSortByText(sortBy){
    return sortBy === C.SORT_ASC ? "Sort Descending" : "Sort Ascending";
  }
};

export default Helpers;