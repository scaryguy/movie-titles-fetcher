const axios = require("axios");

const API_URL = `https://jsonmock.hackerrank.com/api/movies/search/?`;

class MovieTitleFetcher {
  async get(keyword) {
    try {
      const firstResponse = await this.getPage(keyword);
      const totalPages = firstResponse.total_pages;
      const promises = [];

      for (let i = 1; i <= totalPages; i++) {
        promises.push(this.getPage(keyword, i));
      }

      const allPagesResults = await Promise.all(promises);
      const titles = allPagesResults.reduce(
        (memo, item) => memo.concat(item.data),
        []
      );

      const sortedResult = titles
        .map(movie => movie.Title)
        .sort((a, b) => a.localeCompare(b));

      return sortedResult;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async getPage(keyword, page = 1) {
    if (!keyword) throw Error("Please provide a keyword");
    try {
      const response = await axios.get(
        `${API_URL}Title=${keyword}&page=${page}`
      );
      const result = response.data;
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = MovieTitleFetcher;
