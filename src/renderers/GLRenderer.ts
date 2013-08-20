
module Kiwi.Renderers {

    // Class
    export class GLRenderer implements IRenderer {

        constructor(game: Kiwi.Game) {
            this._game = game;
        }

        public boot() {

        }

        public objType() {
            return "GLRenderer";
        }

        private _game: Kiwi.Game;

        private _currentCamera: Kiwi.Camera;

        private _recurse(child: IChild) {

            //console.log(child.childType());

            if (!child.willRender) return;

            if (child.childType() === Kiwi.GROUP) {
                for (var i = 0; i < (<Kiwi.Group>child).members.length; i++) {
                    this._recurse((<Kiwi.Group>child).members[i]);
                }
            } else {

                child.render(this._currentCamera);

              
            }


        }


        public render(camera: Kiwi.Camera) {
            /*
            this._currentCamera = camera;
            var root: IChild[] = this._game.states.current.members;

            //clear 
            this._game.stage.ctx.fillStyle = "blue";
            this._game.stage.ctx.fillRect(0, 0, this._game.stage.canvas.width, this._game.stage.canvas.height);

            for (var i = 0; i < root.length; i++) {
                this._recurse(root[i]);
            }
            //console.log("reder");

            /*
            
            */
        
        }
    

    }

}
