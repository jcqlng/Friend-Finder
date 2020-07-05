function Friend(friend) {
    this.name = friend.name;
    this.photo = friend.photo;
    this.scores = convert(friend.scores);
    this.totalScore = calculateTotalScore(this.scores);
    this.relativeScore = 0;

    function convert(textScoresArray){
        let scores = [];

        textScoresArray.forEach(function(score){
            scores.push(parseInt(score));
        });

        return scores;
    }

    this.calculateRelativeScore = function(incomingArray){
        
        for(let i = 0; i < this.scores.length; i++){
            this.relativeScore += Math.abs(this.scores[i] - incomingArray[i]);
        }

        
    }

    function calculateTotalScore (scores) {
        let score = 0;

        scores.forEach(function(item){
            score += item;
        })

        return score;
    }


}

module.exports = Friend;