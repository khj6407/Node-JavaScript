console.log(process.version); //v12.14.1
console.log(process.argv); //[ 'C:\\Program Files\\nodejs\\node.exe' ]
console.log(process.memoryUsage());
/*
 {
    rss: 22810624,
    heapTotal: 5447680,
    heapUsed: 3561192,
    external: 1387178
 }
*/
console.log(process.uptime()); //1395.033528763
process.exit();
