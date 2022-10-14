export default interface IGame {
    appId: number,
    gameName: string,
    releaseDate: Date,
    rating: number,
    numReview: number,
    description: string,
    developers: [string],
    publishers: [string]
}