const task = require('vsts-task-lib/task');

try {
    console.log();
    console.log('[i] Executing task: Started');
    console.log();
    console.log('[i] Storing secret: Started');
    console.log();
        const password = task.getInput('password', true);
        console.log(`[i] password: ${password}`);
    console.log();
    console.log('[+] Storing input variables: Complete');
    console.log();
} catch (error) {
    console.log();
    console.log('[-] Executing task: Failure');
    console.log(`Reason: ${error}`);
}