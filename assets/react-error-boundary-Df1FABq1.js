import{r as i}from"./react-BFnl5N1q.js";const c=i.createContext(null),d={didCatch:!1,error:null};class f extends i.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=d}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(){const{error:r}=this.state;if(r!==null){for(var t,e,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];(t=(e=this.props).onReset)===null||t===void 0||t.call(e,{args:s,reason:"imperative-api"}),this.setState(d)}}componentDidCatch(r,t){var e,n;(e=(n=this.props).onError)===null||e===void 0||e.call(n,r,t)}componentDidUpdate(r,t){const{didCatch:e}=this.state,{resetKeys:n}=this.props;if(e&&t.error!==null&&h(r.resetKeys,n)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:n,prev:r.resetKeys,reason:"keys"}),this.setState(d)}}render(){const{children:r,fallbackRender:t,FallbackComponent:e,fallback:n}=this.props,{didCatch:s,error:o}=this.state;let a=r;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof t=="function")a=t(u);else if(e)a=i.createElement(e,u);else if(n!==void 0)a=n;else throw o}return i.createElement(c.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function h(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return l.length!==r.length||l.some((t,e)=>!Object.is(t,r[e]))}export{f as E};
