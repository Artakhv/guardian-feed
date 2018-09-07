apiUrl:"https://content.guardianapis.com/sport/live/2018/sep/07/county-cricket-nottinghamshire-v-yorkshire-and-more-live"
id:
"sport/live/2018/sep/07/county-cricket-nottinghamshire-v-yorkshire-and-more-live"
isHosted:false
pillarId:"pillar/sport"
pillarName:"Sport"
sectionId:"sport"
sectionName:"Sport"
type:"liveblog"
webPublicationDate:"2018-09-07T15:37:44Z"
webTitle:"County cricket: Notts draw with Yorkshire and more – live!"
webUrl:"https://www.theguardian.com/sport/live/2018/sep/07/county-cricket-nottinghamshire-v-yorkshire-and-more-live"

onst Homepage = () => <div>HOMEPAGE</div>;
const About = () => <div>ABOUT</div>;

const SwitchDemo = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Homepage} />
  </Switch>
