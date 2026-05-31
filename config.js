module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTUwMjUzMTQyNDAwNjMwNzk1MQ.GOZC1A.CxVVjnMoCjLRzN3de54IQDa9_QNGOe7JgnhLJk',
        playing: 'by the Community ❤️',
        global: true,
        guild: process.env.GUILD_ID || '1447493918148264080',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
