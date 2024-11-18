import{i as A,f as r,t as s,j as n,k as e,g as o}from"../chunks/disclose-version.BmIQt7z6.js";import{s as d,B as I,z as L,f as ue}from"../chunks/runtime.Bix74eL6.js";import{e as _}from"../chunks/render.DlfULs-I.js";import{b as F}from"../chunks/this.wyHJEu0o.js";import{C as E}from"../chunks/code.seIn7Zd2.js";import{P as ce,S as C,T as S,C as P}from"../chunks/content.DTFQcm-x.js";import{F as ve}from"../chunks/front.DnDuSa6w.js";import{S as V}from"../chunks/split.B0OcPuxR.js";var ge=s('<ol><li class="fragment">Layout-widgets</li> <li class="fragment">FutureBuilder</li> <li class="fragment">Dialog</li> <li class="fragment">Demo</li> <ul><li class="fragment">Kommunikation med dart-server</li></ul></ol>'),me=s("<!> <!>",5),fe=s('<ol><li class="fragment">Column</li> <ul><li class="fragment">För vertikal placering av widgets i kolumner</li></ul> <li class="fragment">Row</li> <ul><li class="fragment">För horisontell placering av widgets i rader</li></ul> <li class="fragment">Stack</li> <ul><li class="fragment">För att lägga widgets ovanpå varandra</li> <li class="fragment">Använd Positioned för exakt placering inom Stack</li></ul> <li class="fragment">Expanded</li> <ul><li class="fragment">Låter widgets expandera för att fylla tillgängligt utrymme</li></ul></ol>'),pe=s("<!> <!>",5),_e=s('<ol start="5"><li class="fragment">Wrap</li> <ul><li class="fragment">Som Row/Column fast med automatiskt radbyte när utrymmet tar slut</li></ul> <li class="fragment">ListView</li> <ul><li class="fragment">För scrollbara listor av widgets</li></ul> <li class="fragment">GridView</li> <ul><li class="fragment">För scrollbara rutnät av widgets</li></ul> <li class="fragment"><strong>Alla layout widgets kan kombineras</strong></li> <ul><li class="fragment">Till exempel kan en ListView innehålla Rows med Stacks</li></ul></ol>'),he=s("<!> <!>",5),$e=s('<ul><li class="fragment">Vertikal stapel av widgets</li> <li class="fragment">Horisontell rad av widgets</li> <li class="fragment">Justeringsalternativ:</li> <ul><li class="fragment">mainAxisAlignment - justerar i huvudaxelns riktning</li> <li class="fragment">crossAxisAlignment - justerar i tväraxelns riktning</li></ul></ul> <div><div class="enter"><!></div></div>',1),xe=s("<!> <!>",5),we=s('<ul><li class="fragment">Lägger widgets i lager ovanpå varandra</li> <li class="fragment">Positioned för exakt placering</li> <li class="fragment">Vanliga användningsområden:</li> <ul><li class="fragment">Märken, badges, notiser</li> <li class="fragment">Flytande element</li></ul></ul> <div><div class="enter"><!></div></div>',1),ye=s("<!> <!>",5),Te=s('<ul><li class="fragment">Expanded fördelar tillgängligt utrymme</li> <li class="fragment">Wrap hanterar överskjutande innehåll automatiskt</li></ul> <div><div class="enter"><!></div></div>',1),Ce=s("<!> <!>",5),Se=s('<ul><li class="fragment">ListView.builder för effektiv scrollning</li> <li class="fragment">GridView.builder för rutnätslayouter</li></ul> <div><div class="enter"><!></div></div>',1),Pe=s("<!> <!>",5),be=s('<ul><li class="fragment">Grundläggande användning av FutureBuilder</li> <li class="fragment">Hantering av olika tillstånd</li></ul> <div><div class="enter"><!></div></div>',1),ke=s("<!> <!>",5),Ae=s('<ul><li class="fragment">AlertDialog för enkla meddelanden</li> <li class="fragment">Anpassad dialog med styling</li> <li class="fragment">ModalBottomSheet för fler alternativ</li></ul> <div><div class="enter"><!></div></div>',1),De=s("<!> <!>",5),Be=s('<div class="mt-60 text-center">Det var allt för idag!</div>'),Ie=s("<!> <!>",5),Le=s('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function je(ae){const re={year:"numeric",month:"long",day:"numeric"},le=new Date().toLocaleDateString("sv-SE",re);let D,R,N,W,z,B,l=ue(!1);var H=A(!0),ie=n(H);ce(ie,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ne,Ee)=>{var j=Le(),J=n(j);ve(J,{});var K=e(e(J,!0));C(K,{children:(u,b)=>{var t=me(),a=n(t);S(a,{title:"Dagens agenda"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=ge();r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var O=e(e(K,!0));C(O,{children:(u,b)=>{var t=pe(),a=n(t);S(a,{title:"Layout widgets"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=fe();r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var U=e(e(O,!0));C(U,{children:(u,b)=>{var t=he(),a=n(t);S(a,{title:"Layout widgets - fortsättning"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=_e();r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var q=e(e(U,!0));C(q,{in:async()=>{d(l,!1),await D.update``},children:(u,b)=>{var t=xe(),a=n(t);S(a,{title:"Layout Widgets - Column & Row"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=A(!0),x=n(i);V(x,{children:(w,G)=>{var g=$e(),m=n(g),f=o(m),h=e(e(f,!0)),y=e(e(h,!0)),p=e(e(m,!0)),$=o(p),T=o($);F(E(T,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),M=>D=M,()=>D),I(()=>$.hidden=!L(l)),_("current",f,async()=>{d(l,!0),await D.update`Column(
		children: [
			Text('Item 1'),
			Text('Item 2'),
			Text('Item 3'),
		],
	)`},!1),_("current",h,async()=>{d(l,!0),await D.update`Row(
		children: [
			Text('Left'),
			Text('Center'),
			Text('Right'),
		],
	)`},!1),_("current",y,async()=>{d(l,!0),await D.update`Column(
		mainAxisAlignment: MainAxisAlignment.center,
		crossAxisAlignment: CrossAxisAlignment.stretch,
		children: [
			Text('Centered'),
			Text('And'),
			Text('Stretched'),
		],
	)`},!1),r(w,g)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var Q=e(e(q,!0));C(Q,{in:async()=>{d(l,!1),await R.update``},children:(u,b)=>{var t=ye(),a=n(t);S(a,{title:"Stack & Positioned"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=A(!0),x=n(i);V(x,{children:(w,G)=>{var g=we(),m=n(g),f=o(m),h=e(e(f,!0)),y=e(e(m,!0)),p=o(y),$=o(p);F(E($,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>R=T,()=>R),I(()=>p.hidden=!L(l)),_("current",f,async()=>{d(l,!0),await R.update`Stack(
		children: [
			Image.asset('background.png'),
			Text('Overlaid Text'),
		],
	)`},!1),_("current",h,async()=>{d(l,!0),await R.update`Stack(
		children: [
			Image.asset('background.png'),
			Positioned(
				bottom: 20,
				right: 20,
				child: Text('Bottom Right'),
			),
		],
	)`},!1),r(w,g)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var X=e(e(Q,!0));C(X,{in:async()=>{d(l,!1),await N.update``},children:(u,b)=>{var t=Ce(),a=n(t);S(a,{title:"Expanded & Wrap"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=A(!0),x=n(i);V(x,{children:(w,G)=>{var g=Te(),m=n(g),f=o(m),h=e(e(f,!0)),y=e(e(m,!0)),p=o(y),$=o(p);F(E($,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>N=T,()=>N),I(()=>p.hidden=!L(l)),_("current",f,async()=>{d(l,!0),await N.update`Row(
		children: [
			Expanded(
				flex: 2,
				child: Container(color: Colors.red),
			),
			Expanded(
				flex: 1,
				child: Container(color: Colors.blue),
			),
		],
	)`},!1),_("current",h,async()=>{d(l,!0),await N.update`Wrap(
		spacing: 8.0,
		runSpacing: 8.0,
		children: [
			Chip(label: Text('Flutter')),
			Chip(label: Text('Dart')),
			Chip(label: Text('Mobile')),
			Chip(label: Text('Web')),
		],
	)`},!1),r(w,g)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var Y=e(e(X,!0));C(Y,{in:async()=>{d(l,!1),await W.update``},children:(u,b)=>{var t=Pe(),a=n(t);S(a,{title:"ListView & GridView"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=A(!0),x=n(i);V(x,{children:(w,G)=>{var g=Se(),m=n(g),f=o(m),h=e(e(f,!0)),y=e(e(m,!0)),p=o(y),$=o(p);F(E($,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>W=T,()=>W),I(()=>p.hidden=!L(l)),_("current",f,async()=>{d(l,!0),await W.update`ListView.builder(
		itemCount: items.length,
		itemBuilder: (context, index) {
			return ListTile(
				title: Text(items[index]),
			);
		},
	)`},!1),_("current",h,async()=>{d(l,!0),await W.update`GridView.builder(
		gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
			crossAxisCount: 2,
			mainAxisSpacing: 10,
			crossAxisSpacing: 10,
		),
		itemCount: items.length,
		itemBuilder: (context, index) {
			return Card(
				child: Center(
					child: Text(items[index]),
				),
			);
		},
	)`},!1),r(w,g)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var Z=e(e(Y,!0));C(Z,{in:async()=>{d(l,!1),await z.update``},children:(u,b)=>{var t=ke(),a=n(t);S(a,{title:"FutureBuilder"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=A(!0),x=n(i);V(x,{children:(w,G)=>{var g=be(),m=n(g),f=o(m),h=e(e(f,!0)),y=e(e(m,!0)),p=o(y),$=o(p);F(E($,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),T=>z=T,()=>z),I(()=>p.hidden=!L(l)),_("current",f,async()=>{d(l,!0),await z.update`Future<String> fetchData() async {
		await Future.delayed(Duration(seconds: 2));
		return 'Data loaded!';
	}
	
	// In your build method:
	FutureBuilder<String>(
		future: fetchData(),
		builder: (context, snapshot) {
			if (snapshot.hasData) {
				return Text(snapshot.data!);
			}
			if (snapshot.hasError) {
				return Text('Error: \${snapshot.error}');
			}
			return CircularProgressIndicator();
		},
	)`},!1),_("current",h,async()=>{d(l,!0),await z.update`FutureBuilder<List<String>>(
		future: fetchItems(),
		builder: (context, snapshot) {
			switch (snapshot.connectionState) {
				case ConnectionState.none:
					return Text('Press button to start');
				case ConnectionState.waiting:
					return CircularProgressIndicator();
				case ConnectionState.active:
					return Text('Active state');
				case ConnectionState.done:
					if (snapshot.hasError) 
						return Text('Error: \${snapshot.error}');
					return ListView.builder(
						itemCount: snapshot.data!.length,
						itemBuilder: (context, index) {
							return ListTile(
								title: Text(snapshot.data![index]),
							);
						},
					);
			}
		},
	)`},!1),r(w,g)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var ee=e(e(Z,!0));C(ee,{in:async()=>{d(l,!1),await B.update``},children:(u,b)=>{var t=De(),a=n(t);S(a,{title:"Flutter Dialogs"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=A(!0),x=n(i);V(x,{children:(w,G)=>{var g=Ae(),m=n(g),f=o(m),h=e(e(f,!0)),y=e(e(h,!0)),p=e(e(m,!0)),$=o(p),T=o($);F(E(T,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),M=>B=M,()=>B),I(()=>$.hidden=!L(l)),_("current",f,async()=>{d(l,!0),await B.update`// Simple alert dialog
	showDialog(
		context: context,
		builder: (context) => AlertDialog(
			title: Text('Warning'),
			content: Text('Are you sure?'),
			actions: [
				TextButton(
					onPressed: () => Navigator.pop(context),
					child: Text('Cancel'),
				),
				TextButton(
					onPressed: () {
						// Handle confirmation
						Navigator.pop(context);
					},
					child: Text('Confirm'),
				),
			],
		),
	)`},!1),_("current",h,async()=>{d(l,!0),await B.update`// Custom dialog
	showDialog(
		context: context,
		builder: (context) => Dialog(
			shape: RoundedRectangleBorder(
				borderRadius: BorderRadius.circular(20),
			),
			child: Padding(
				padding: EdgeInsets.all(20),
				child: Column(
					mainAxisSize: MainAxisSize.min,
					children: [
						CircleAvatar(
							radius: 40,
							child: Icon(Icons.check, size: 40),
						),
						SizedBox(height: 20),
						Text('Success!'),
						ElevatedButton(
							onPressed: () => Navigator.pop(context),
							child: Text('Close'),
						),
					],
				),
			),
		),
	)`},!1),_("current",y,async()=>{d(l,!0),await B.update`// Bottom sheet
	showModalBottomSheet(
		context: context,
		builder: (context) => Container(
			padding: EdgeInsets.all(20),
			child: Column(
				mainAxisSize: MainAxisSize.min,
				children: [
					Text('Choose an option'),
					ListTile(
						leading: Icon(Icons.photo),
						title: Text('Gallery'),
						onTap: () {
							// Handle gallery selection
							Navigator.pop(context);
						},
					),
					ListTile(
						leading: Icon(Icons.camera),
						title: Text('Camera'),
						onTap: () {
							// Handle camera selection
							Navigator.pop(context);
						},
					),
				],
			),
		),
	)`},!1),r(w,g)},$$slots:{default:!0}}),r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var te=e(e(ee,!0));C(te,{children:(u,b)=>{var t=Ie(),a=n(t);S(a,{title:"Tack för idag!"});var c=e(e(a,!0));P(c,{children:(v,k)=>{var i=Be();r(v,i)},$$slots:{default:!0}}),r(u,t)},$$slots:{default:!0}});var se=e(e(te,!0)),oe=o(se),de=o(oe);de.nodeValue=le,r(ne,j)},$$slots:{default:!0}}),r(ae,H)}export{je as component};
