var playerSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Player', playerSchema);