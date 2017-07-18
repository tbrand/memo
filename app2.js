'use strict';

var RollingSpider = require('rolling-spider');
var temporal = require('temporal');
/*
  var rollingSpider = new RollingSpider({ uuid: '118a5d28cb8e41a99017a4c4996fe9a2' });

  rollingSpider.connect(function() {

  rollingSpider.setup(function() {

  rollingSpider.flatTrim();
  rollingSpider.startPing();
  rollingSpider.flatTrim();

  console.log('Connected to drone', rollingSpider.name);

  temporal.queue([
  {
  delay: 5000,
  task: function () {
  console.log('step 0');
  rollingSpider.takeOff();
  rollingSpider.flatTrim();
  }
  },
  {
  delay: 5000,
  task: function () {
  console.log('step 0.5');
  rollingSpider.up({steps: 20});
  }
  },
  {
  delay: 5000,
  task: function () {
  console.log('step 1');
  rollingSpider.forward({steps: 25});
  }
  },
  {
  delay: 5000,
  task: function () {
  console.log('step 2');
  rollingSpider.frontFlip();
  }
  },
  {
  delay: 5000,
  task: function () {
  console.log('step 3');
  rollingSpider.backward({steps: 30});
  }
  },
  {
  delay: 5000,
  task: function () {
  console.log('step 4');
  rollingSpider.land();
  }
  },
  {
  delay: 5000,
  task: function () {
  console.log('step 5');
  temporal.clear();
  process.exit(0);
  }
  }
  ]);
  });
  });
*/

var rollingSpider2 = new RollingSpider({ uuid: 'baee3c1f7a3549c096485987f877b910' });

rollingSpider2.connect(function() {

    rollingSpider2.setup(function() {

	rollingSpider2.flatTrim();
	rollingSpider2.startPing();
	rollingSpider2.flatTrim();

	console.log('Connected to drone', rollingSpider2.name);

	temporal.queue([
	    {
		delay: 5000,
		task: function () {
		    console.log('step 0');
		    rollingSpider2.takeOff();
		    rollingSpider2.flatTrim();
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 0.5');
		    rollingSpider2.up({steps: 20});
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 1');
		    rollingSpider2.forward({steps: 25});
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 2');
		    rollingSpider2.frontFlip();
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 2');
		    rollingSpider2.frontFlip();
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 2');
		    rollingSpider2.frontFlip();
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 3');
		    rollingSpider2.backward({steps: 30});
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 4');
		    rollingSpider2.land();
		}
	    },
	    {
		delay: 5000,
		task: function () {
		    console.log('step 5');
		    temporal.clear();
		    process.exit(0);
		}
	    }
	]);
    });
});
