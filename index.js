const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const state1 = core.getInput('state1');
  const state2 = core.getInput('state2');
  
  console.log(`State1 Status ${state1}!`);
  console.log(`State2 Status ${state2}!`);
  
  if (${state1} == "sleeping")
	  core.setOutput("current_state", ${state1});
  else
	  core.setOutput("current_state", ${state2})
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  
} catch (error) {
  core.setFailed(error.message);
}