// Sportsbook Notebook read-only feed gateway. Deploy as a Cloudflare Worker.
// Set ALLOW_KALSHI=true only after confirming your intended API use is authorized.
const ESPN='https://site.api.espn.com/apis/site/v2/sports/football/';
const KALSHI='https://api.elections.kalshi.com/trade-api/v2/markets';
const SERIES=new Set(['KXNFLGAME','KXNFLSPREAD','KXNCAAFGAME','KXNCAAFSPREAD']);
export default { async fetch(request,env,ctx){
  const u=new URL(request.url), origin=request.headers.get('Origin')||'';
  const allowed=origin==='https://saundersmatthome.github.io';
  const headers={'Access-Control-Allow-Origin':allowed?origin:'https://saundersmatthome.github.io','Access-Control-Allow-Methods':'GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin','Cache-Control':'public, max-age=20'};
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
  const respond=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{...headers,'Content-Type':'application/json; charset=utf-8'}});
  if(request.method!=='GET')return respond({error:'Method not allowed'},405);
  if(u.pathname==='/health')return respond({ok:true,service:'sportsbook-notebook-feeds',kalshiEnabled:env.ALLOW_KALSHI==='true'});
  let target;
  if(u.pathname==='/espn'){
    const league=u.searchParams.get('league')||'nfl',date=u.searchParams.get('date')||'';
    if(!['nfl','college-football'].includes(league)||!/^\d{8}$/.test(date))return respond({error:'Invalid league or date'},400);
    target=ESPN+league+'/scoreboard?dates='+date+(league==='college-football'?'&groups=80&limit=150':'');
  }else if(u.pathname==='/kalshi'){
    if(env.ALLOW_KALSHI!=='true')return respond({error:'Kalshi gateway disabled pending authorized API access'},403);
    const series=u.searchParams.get('series')||'';
    if(!SERIES.has(series))return respond({error:'Unsupported series'},400);
    target=KALSHI+'?limit=200&series_ticker='+encodeURIComponent(series);
  }else return respond({error:'Not found'},404);
  try{
    const response=await fetch(target,{headers:{'Accept':'application/json'},cf:{cacheTtl:20,cacheEverything:true}});
    if(!response.ok)return respond({error:'Upstream returned '+response.status},502);
    const body=await response.json();
    return respond(body);
  }catch(e){return respond({error:'Upstream unavailable'},502)}
}};
