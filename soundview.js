// each sound is associated with character here
var soundList = {
    ext: '.wav',
    sounds: [
        {
            sound: 'clap',
            char: 'A'
        },
        {
            sound: 'hihat',
            char: 'S'
        },
        {
            sound: 'kick',
            char: 'D'
        }
        , {
            sound: 'openhat',
            char: 'F'
        },
        {
            sound: 'boom',
            char: 'G'
        },
        {
            sound: 'ride',
            char: 'H'
        },
        {
            sound: 'snare',
            char: 'J'
        },
        {
            sound: 'tom',
            char: 'K'
        },
        {
            sound: 'tink',
            char: 'L'
        }
    ]
}

// add the list of audio to the html
var audios = ejs.render(
    `<% sounds.map(function(el){%> <audio src="${"./sounds/<%= el.sound +ext %>"}"
     data-key="${'<%= el.char.charCodeAt(0) %>'}"    type="audio/${ "<%= ext %>" }" ></audio> <% }) %>`,
    {sounds:soundList.sounds, ext:soundList.ext});
document.getElementById('audios').innerHTML = audios;