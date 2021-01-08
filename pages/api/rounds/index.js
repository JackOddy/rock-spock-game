import { playGame } from "./_helpers.js"

export default (req, res) => {
  const { gesture } = JSON.parse(req.body)
  const results = playGame({ playerGesture: gesture })

  res.statusCode = 200
  res.json(results)
}
