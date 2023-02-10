"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4381],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4454:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const l={id:"block-loadbalancer-services",title:"Block Services with type LoadBalancer"},o="Block Services with type LoadBalancer",c={unversionedId:"validation/block-loadbalancer-services",id:"validation/block-loadbalancer-services",title:"Block Services with type LoadBalancer",description:"Description",source:"@site/docs/validation/block-loadbalancer-services.md",sourceDirName:"validation",slug:"/validation/block-loadbalancer-services",permalink:"/gatekeeper-library/website/validation/block-loadbalancer-services",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/validation/block-loadbalancer-services.md",tags:[],version:"current",frontMatter:{id:"block-loadbalancer-services",title:"Block Services with type LoadBalancer"},sidebar:"docs",previous:{title:"Block Endpoint Edit Default Role",permalink:"/gatekeeper-library/website/validation/block-endpoint-edit-default-role"},next:{title:"Block NodePort",permalink:"/gatekeeper-library/website/validation/block-nodeport-services"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"block-services-with-type-loadbalancer"},"Block Services with type LoadBalancer"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Disallows all Services with type LoadBalancer.\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sblockloadbalancer\n  annotations:\n    metadata.gatekeeper.sh/title: "Block Services with type LoadBalancer"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Disallows all Services with type LoadBalancer.\n\n      https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sBlockLoadBalancer\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sblockloadbalancer\n\n        violation[{"msg": msg}] {\n          input.review.kind.kind == "Service"\n          input.review.object.spec.type == "LoadBalancer"\n          msg := "User is not allowed to create service of type LoadBalancer"\n        }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-loadbalancer-services/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"block-loadbalancer-services"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sBlockLoadBalancer\nmetadata:\n  name: block-load-balancer\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Service"]\n    excludedNamespaces:\n      - "ingress-nginx-private"\n      - "ingress-nginx-public"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-loadbalancer-services/samples/block-load-balancer/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service-allowed\nspec:\n  type: ClusterIP\n  ports:\n    - port: 80\n      targetPort: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-loadbalancer-services/samples/block-load-balancer/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service-disallowed\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 80\n      targetPort: 80\n      nodePort: 30007\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/block-loadbalancer-services/samples/block-load-balancer/example_disallowed.yaml\n"))))))}d.isMDXComponent=!0}}]);