class Warrior {
    
    constructor() {
        this._level = 1;
        this._experience = 100;
        this._rank = "Pushover";
        this._achievements = [];
    }
    level() {
        return this._level;
    }

    experience() {
        return this._experience;
    }

    rank() {
        return this._rank;
    }

    achievements() {
        return this._achievements;
    }

    training(trainingData) {
        const [description, experience, minLevel] = trainingData;
        if (this._level >= minLevel) {
            this._experience += experience;
            if (this._experience > 10000)
            {
                this._experience = 10000;
            }
            this._achievements.push(description);
            this.updateLevelRank();
            return description;
        }
        return "Not strong enough";
    }

    updateLevelRank()
    {
        const rankOrder = [
            "Pushover", "Novice", "Fighter", "Warrior", "Veteran",
            "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"
        ];
        this._level = Math.floor(this._experience / 100);

        if (this._level === 100) {
            this._rank = "Greatest";
        } else if (this._level % 10 === 0) {
            this._rank = rankOrder[this._level / 10];
        }
        else {
            const rankIndex = Math.floor((this._level) / 10);
            const clampedIndex = Math.max(0, Math.min(rankIndex, rankOrder.length - 1));
            this._rank = rankOrder[clampedIndex];
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const rankOrder = [
            "Pushover", "Novice", "Fighter", "Warrior", "Veteran",
            "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"
        ];
        const warriorRankIndex = rankOrder.indexOf(this._rank);
        const enemyRank = rankOrder.find((rank, index) => index === Math.floor(enemyLevel / 10));
        const enemyRankIndex = rankOrder.indexOf(enemyRank);
        const rankDifference = enemyRankIndex - warriorRankIndex;
        
        const levelDifference = enemyLevel - this._level;

        if (rankDifference >= 1 && levelDifference >= 5) {
            return "You've been defeated";
        }

        //experience update
        if (levelDifference === 0)
        {
            this._experience += 10;
            if (this._experience > 10000)
            {
                this._experience = 10000;
            }
        }
        else if (levelDifference === -1)
        {
            this._experience += 5;
            if (this._experience > 10000)
            {
                this._experience = 10000;
            }
        }
        else if (levelDifference >= 1)
        {
            this._experience += 20 * levelDifference * levelDifference;
            if (this._experience > 10000)
            {
                this._experience = 10000;
            }
        }
        
        //level & rank update
        this.updateLevelRank();

        //message return
        if (levelDifference <=-2) 
        {
            return  "Easy fight";
        }
        if (levelDifference === 0 || levelDifference === -1)
        {
            return "A good fight";
        }
        if (levelDifference > 0) 
        {
            return  "An intense fight";
        }
    }
}