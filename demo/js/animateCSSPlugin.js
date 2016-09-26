"use-strict";function bounce(){console.log("Bounce!"),TweenMax.to(this.target,mediumSpeed,{y:"-=30px"}),TweenMax.to(this.target,normalSpeed,{delay:.2,y:0,ease:Bounce.easeOut})}function flash(){console.log("Flash!"),TweenMax.to(this.target,mediumSpeed,{alpha:0}),TweenMax.to(this.target,mediumSpeed,{delay:.3,alpha:1}),TweenMax.to(this.target,mediumSpeed,{delay:.6,alpha:0}),TweenMax.to(this.target,mediumSpeed,{delay:.9,alpha:1})}function pulse(){console.log("Pulse!"),TweenMax.to(this.target,normalSpeed,{scale:1.1}),TweenMax.to(this.target,normalSpeed,{delay:.3,scale:1})}function rubberBand(){console.log("Rubber Band!"),TweenMax.to(this.target,.2,{scaleX:1.2,scaleY:.8}),TweenMax.to(this.target,.8,{scaleX:1,scaleY:1,delay:mediumSpeed,ease:Elastic.easeOut})}function shake(){TweenMax.to(this.target,normalSpeed,{x:"-=10px"}),TweenMax.to(this.target,normalSpeed,{x:"+=40px",delay:highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"-=40px",delay:2*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"+=40px",delay:3*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"-=40px",delay:4*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"+=40px",delay:5*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"-=40px",delay:6*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"+=40px",delay:7*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:"-=40px",delay:8*highSpeed}),TweenMax.to(this.target,normalSpeed,{x:0,delay:9*highSpeed})}function swing(){TweenMax.to(this.target,mediumSpeed,{rotationZ:"+=10"}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"-=20",delay:mediumSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"+=15",delay:2*mediumSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"-=15",delay:3*mediumSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:0,delay:4*mediumSpeed})}function tada(){TweenMax.to(this.target,mediumSpeed,{rotationZ:"+=10",scale:.9}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"-=20",scale:1.1,delay:highSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"+=20",delay:2*highSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"-=20",delay:3*highSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"+=20",delay:4*highSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:"-=20",delay:5*highSpeed}),TweenMax.to(this.target,mediumSpeed,{rotationZ:0,scale:1,delay:6*highSpeed})}var highSpeed=.1,midHighSpeed=.2,mediumSpeed=.3,normalSpeed=.5;