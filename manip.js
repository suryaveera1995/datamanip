var data = [
{
  "_id": {
    "submittedOn": "2018-01-08",
    "workflow": "OpenJDK8SpringMySQLApp"
  },
  "submissions": 6
},
{
  "_id": {
    "submittedOn": "2018-01-08",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 5
},
{
  "_id": {
    "submittedOn": "2018-01-07",
    "workflow": "OpenJDK8SpringMySQLApp"
  },
  "submissions": 6
},
{
  "_id": {
    "submittedOn": "2018-01-06",
    "workflow": "OpenJDK8SpringMySQLApp"
  },
  "submissions": 4
},
{
  "_id": {
    "submittedOn": "2018-01-05",
    "workflow": "OpenJDK8SpringMySQLApp"
  },
  "submissions": 31
},
{
  "_id": {
    "submittedOn": "2018-01-03",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 4
},
{
  "_id": {
    "submittedOn": "2018-01-02",
    "workflow": "NodeJSConsoleApp"
  },
  "submissions": 1
},
{
  "_id": {
    "submittedOn": "2018-01-02",
    "workflow": "NodeJSExpressMongoApp"
  },
  "submissions": 1
},
{
  "_id": {
    "submittedOn": "2017-10-16",
    "workflow": "NodeJSConsoleApp"
  },
  "submissions": 4
},
{
  "_id": {
    "submittedOn": "2017-10-08",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 13
},
{
  "_id": {
    "submittedOn": "2017-11-13",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 72
},
{
  "_id": {
    "submittedOn": "2017-11-18",
    "workflow": "NodeJSExpressApp"
  },
  "submissions": 14
},
{
  "_id": {
    "submittedOn": "2017-10-07",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 16
},
{
  "_id": {
    "submittedOn": "2017-10-06",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 24
},
{
  "_id": {
    "submittedOn": "2017-11-27",
    "workflow": "OpenJDK8SpringMySQLApp"
  },
  "submissions": 2
},
{
  "_id": {
    "submittedOn": "2017-10-05",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 37
},
{
  "_id": {
    "submittedOn": "2017-06-06",
    "workflow": "SROEvaluation"
  },
  "submissions": 17
},
{
  "_id": {
    "submittedOn": "2017-09-11",
    "workflow": "NodeJSConsoleApp"
  },
  "submissions": 20
},
{
  "_id": {
    "submittedOn": "2017-10-03",
    "workflow": "OpenJDK8MavenApp"
  },
  "submissions": 36
},
{
  "_id": {
    "submittedOn": "2017-09-29",
    "workflow": "NodeJSConsoleHTMLApp"
  },
  "submissions": 1
}
],
map = new Map(),
result;

let dataColln = data.map((f)=>{
  let obj1 = {};
  obj1.submittedOn = f._id.submittedOn;
  obj1.workflow = f._id.workflow;
  obj1.submissions = f.submissions;
  return obj1;
});
// console.log(dataColln);

    
dataColln.forEach(({ submittedOn, workflow, submissions }) =>
    map.set(submittedOn, Object.assign(map.get(submittedOn) || { submittedOn }, { [workflow]: submissions }))
);

result = [...map.values()];
    
console.log(result);
