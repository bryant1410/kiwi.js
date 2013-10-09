/**
* 
* @module Kiwi
* @submodule Sound
* 
*/ 

module Kiwi.Sound {

    /**
    * 
    *
    * @class AudioLibrary
    * @constructor
    * @param game {Game} The game that this audio library is a member of.
    * @return {AudioLibrary}
    */
    export class AudioLibrary {
         
        constructor(game: Kiwi.Game) {

            this._game = game;
            this.audio = {};
        }

        /**
        * The type of object that this is.
        * @method objType
        * @return {String}
        * @public
        */
        public objType(): string {
            return "AudioLibrary";
        }

        /**
        * The game that the AudioLibrary belongs to.
        * @property _game
        * @type Game
        * @private
        */
        private _game: Kiwi.Game;

        /**
        * Contains all of the audio files that are available.
        * @property audio
        * @type Object
        * @public
        */
        public audio;

        /**
        * Resets the audio library.
        * @method clear
        * @public
        */
        public clear() {
            for (var prop in this.audio) {
                delete this.audio[prop];
            }
        }

        /**
        * Adds a new audio file to the audio library.
        * @method add
        * @param {File} imageFile
        * @public
        */
        public add(audioFile: Kiwi.Files.File) {

            switch (audioFile.dataType) {
                case Kiwi.Files.File.AUDIO:
                    this.audio[audioFile.key] = audioFile;
                    break;
               
                default:
                    //Audio file is of unknown type and was not added to audio library
                    break;
            }

        }

       
    }

}

