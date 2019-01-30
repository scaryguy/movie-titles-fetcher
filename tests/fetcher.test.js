const MovieTitleFetcher = require("./../index");

describe("Movie Title fetcher", () => {
  it("should successfully fetch movie titles", async () => {
    const fetcher = new MovieTitleFetcher();
    const res = await fetcher.get("spiderman");
    expect(res).toEqual([
      "Amazing Spiderman Syndrome",
      "Fighting, Flying and Driving: The Stunts of Spiderman 3",
      "Hollywood's Master Storytellers: Spiderman Live",
      "Italian Spiderman",
      "Spiderman",
      "Spiderman",
      "Spiderman 5",
      "Spiderman and Grandma",
      "Spiderman in Cannes",
      "Superman, Spiderman or Batman",
      "The Amazing Spiderman T4 Premiere Special",
      "The Death of Spiderman",
      "They Call Me Spiderman"
    ]);
  });

  it("should throw an error without keyword fetch movie titles", async () => {
    const fetcher = new MovieTitleFetcher();
    try {
      const res = await fetcher.get();
    } catch (e) {
      expect(e.message).toBeTruthy();
    }
  });
});
