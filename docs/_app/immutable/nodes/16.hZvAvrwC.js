import{i as N,f as r,t as v,j as i,k as e,g as o}from"../chunks/disclose-version.BmIQt7z6.js";import{s as a,B as R,z as E,f as _e}from"../chunks/runtime.Bix74eL6.js";import{e as d}from"../chunks/render.DlfULs-I.js";import{b as M}from"../chunks/this.wyHJEu0o.js";import{C as I}from"../chunks/code.seIn7Zd2.js";import{P as he,S as T,T as F,C as B}from"../chunks/content.DTFQcm-x.js";import{F as $e}from"../chunks/front.DnDuSa6w.js";import{S as D}from"../chunks/split.B0OcPuxR.js";var xe=v('<ol><li class="fragment">Navigering</li> <li class="fragment">Modal/popup</li> <li class="fragment">Forms</li> <li class="fragment">Focus</li> <li class="fragment">Snackbar</li> <li class="fragment">Expanded</li> <li class="fragment">Scrolling</li></ol>'),Se=v("<!> <!>",5),ye=v('<ul><li class="fragment">Grundläggande navigering med push/pop</li> <li class="fragment">Routing med GoRouter</li> <li class="fragment">Navigering med GoRouter</li></ul> <div><div class="enter"><!></div></div>',1),ke=v("<!> <!>",5),we=v('<ul><li class="fragment">AlertDialog för snabba beslut</li> <li class="fragment">ModalBottomSheet för fler val</li></ul> <div><div class="enter"><!></div></div>',1),be=v("<!> <!>",5),Te=v('<ul><li class="fragment">Flutter Form</li> <ul><li class="fragment">Widget som grupperar och hanterar flera FormFields</li> <li class="fragment">Underlättar att validera och hantera alla fält samtidigt</li></ul> <li class="fragment">GlobalKey ger tillgång till formulärets tillstånd:</li> <ul><li class="fragment">Används för validering och sparande</li></ul> <li class="fragment">TextFormField:</li> <ul><li class="fragment">Hanterar användarinput</li> <li class="fragment">Innehåller validering och sparlogik</li></ul> <li class="fragment">Validering:</li> <ul><li class="fragment">Körs när validate() kallas</li> <li class="fragment">null betyder valid input</li> <li class="fragment">String returnerar felmeddelande</li></ul> <li class="fragment">Spara och hantera data:</li> <ul><li class="fragment">onSaved körs för varje fält vid save()</li> <li class="fragment">validate() kontrollerar alla fält</li> <li class="fragment">SnackBar (förslagsvis) ger feedback till användaren</li></ul></ul> <div><div class="enter"><!></div></div>',1),Fe=v("<!> <!>",5),Be=v('<ul><li class="fragment">Formulär med fokushantering</li> <li class="fragment">Första fältet:</li> <ul><li class="fragment">autofocus drar fokus när widgeten ritas ut</li> <li class="fragment">onFieldSubmitted flyttar fokus</li></ul> <li class="fragment">FocusNode för att hantera fokus via kod:</li> <ul><li class="fragment">Placera focusnoden på fält du vill kunna fokusera från kod</li> <li class="fragment">Anropa requestfocus för att fokusera</li></ul> <li class="fragment">Andra fältet:</li> <ul><li class="fragment">Tar emot fokus från första fältet</li> <li class="fragment">onFieldSubmitted submittar formen</li></ul></ul> <div><div class="enter"><!></div></div>',1),Ce=v("<!> <!>",5),Pe=v('<ul><li class="fragment">Enkel SnackBar för feedback</li> <li class="fragment">SnackBar med åtgärd</li> <li class="fragment">Förslag: Utility-klass för SnackBars</li></ul> <div><div class="enter"><!></div></div>',1),Le=v("<!> <!>",5),Ne=v('<ul><li class="fragment">Expanded</li> <ul><li class="fragment">Används inom Row/Column</li> <li class="fragment">Barnet fyller tillgängligt utrymme</li></ul> <li class="fragment">Flex-egenskapen</li> <ul><li class="fragment">Styr proportionen av utrymmet</li> <li class="fragment">Standardvärdet för flex är 1</li> <li class="fragment">Högre flex-värde tar mer utrymme</li></ul> <li class="fragment">Vanliga Användningsområden</li> <ul><li class="fragment">Scrollbart innehåll mellan fasta headers/footers</li> <li class="fragment">Responsiv layouthantering</li> <li class="fragment">Jämn fördelning av utrymme mellan element</li></ul></ul> <div><div class="enter"><!></div></div>',1),Ae=v("<!> <!>",5),Re=v('<ul><li class="fragment">SingleChildScrollView för enkel scrollning av valfri Widget</li> <li class="fragment">ListView.builder för effektiv scrollning</li> <li class="fragment">RefreshIndicator</li> <ul><li class="fragment">Visar en laddningsindikator när användaren drar uppifrån och ned</li></ul></ul> <div><div class="enter"><!></div></div>',1),Ee=v("<!> <!>",5),Me=v('<div class="mt-60 text-center">Det var allt för idag!</div>'),Ie=v("<!> <!>",5),De=v('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="date svelte-1322xwn"><p class="mb-2 text-xl" id="date"> </p> <p class="text-xl">Stockholms Tekniska Institut</p></div>',5);function Je(ie){const se={year:"numeric",month:"long",day:"numeric"},oe=new Date().toLocaleDateString("sv-SE",se);let G,U,b,K,V,C,H,t=_e(!1);var W=N(!0),de=i(W);he(de,{options:{history:!0,transition:"slide",controls:!0,progress:!1,autoAnimateEasing:"ease",autoAnimateUnmatched:!0},children:(ue,Ke)=>{var z=De(),J=i(z);$e(J,{});var Q=e(e(J,!0));T(Q,{children:(m,P)=>{var l=Se(),n=i(l);F(n,{title:"Dagens agenda"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=xe();r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var X=e(e(Q,!0));T(X,{in:async()=>{a(t,!1),await G.update``},children:(m,P)=>{var l=ke(),n=i(l);F(n,{title:"Navigering i Flutter"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=ye(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(_,!0)),h=e(e(c,!0)),$=o(h),S=o($);M(I(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),w=>G=w,()=>G),R(()=>$.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await G.update`// Grundläggande navigering
Navigator.push(
    context,
    MaterialPageRoute(
        builder: (context) => DetailScreen(),
    ),
);

// För att gå tillbaka
Navigator.pop(context);`},!1),d("current",_,async()=>{a(t,!0),await G.update`// Konfigurera en GoRouter
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/details/:id',
      builder: (context, state) => DetailScreen(
        id: state.params['id']!,
      ),
    ),
  ],
);

// Använda i MaterialApp
MaterialApp.router(
  routerConfig: router,
  title: 'Min App',
);`},!1),d("current",x,async()=>{a(t,!0),await G.update`// Navigera med GoRouter
context.go('/details/123');

// Med query parameters
context.goNamed(
  'details',
  params: {'id': '123'},
  queryParams: {'view': 'full'},
);

// Gå tillbaka
context.pop();`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var Y=e(e(X,!0));T(Y,{in:async()=>{a(t,!1),await U.update``},children:(m,P)=>{var l=be(),n=i(l);F(n,{title:"Modal och Popup"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=we(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(c,!0)),h=o(x),$=o(h);M(I($,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),S=>U=S,()=>U),R(()=>h.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await U.update`Bool? delete = await showDialog(
    context: context,
    builder: (context) => AlertDialog(
        title: Text('Bekräfta radering'),
        content: Text('Är du säker på att du vill radera?'),
        actions: [
            TextButton(
                onPressed: () => Navigator.pop(context), // pass null to caller
                child: Text('Avbryt'),
            ),
            TextButton(
                onPressed: () {
                    Navigator.pop(context, true); // pass true to caller of showDialog
                },
                child: Text('Radera'), 
            ),
        ],
    ),
);`},!1),d("current",_,async()=>{a(t,!0),await U.update`String? choice = await showModalBottomSheet(
    context: context,
    builder: (context) => Container(
        height: 300,
        padding: EdgeInsets.all(16),
        child: Column(
            children: [
                Text('Välj alternativ'),
                ListTile(
                    leading: Icon(Icons.photo),
                    title: Text('Galleri'),
                    onTap: () => Navigator.pop(context, 'gallery'),
                ),
                ListTile(
                    leading: Icon(Icons.camera),
                    title: Text('Kamera'),
                    onTap: () => Navigator.pop(context, 'camera'),
                ),
            ],
        ),
    ),
);`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var Z=e(e(Y,!0));T(Z,{in:async()=>{a(t,!1),await b.update``},children:(m,P)=>{var l=Fe(),n=i(l);F(n,{title:"Formulär"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=Te(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(_,!0)),h=e(e(x,!0)),$=o(h),S=e(e(h,!0)),w=e(e(S,!0)),A=e(e(w,!0)),j=e(e(A,!0)),O=e(e(j,!0)),me=e(e(c,!0)),ne=o(me),ge=o(ne);M(I(ge,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),pe=>b=pe,()=>b),R(()=>ne.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await b.selectLines`*`,await b.update`final _formKey = GlobalKey<FormState>();
String? _email;

Form(
    key: _formKey,
    child: Column(
        children: [
            TextFormField(
                validator: (value) {
                    if (value == null || value.isEmpty) {
                        return 'Vänligen ange email';
                    }
                    if (!value.contains('@')) {
                        return 'Ogiltig email';
                    }
                    return null;
                },
                onSaved: (value) => _email = value,
            ),
            ElevatedButton(
                onPressed: () {
                    if (_formKey.currentState!.validate()) {
                        _formKey.currentState!.save(); // call onSaved for each field
                        ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('Sparar $_email')),
                        );
                    }
                },
                child: Text('Spara'),
            ),
        ],
    ),
)`},!1),d("current",x,async()=>{a(t,!0),await b.selectLines`1,5`},!1),d("current",$,async()=>{a(t,!0),await b.selectLines`1,5,22,23`},!1),d("current",S,async()=>{a(t,!0),await b.selectLines`8-19`},!1),d("current",A,async()=>{a(t,!0),await b.selectLines`9-17,22`},!1),d("current",O,async()=>{a(t,!0),await b.selectLines`18,22-27`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var ee=e(e(Z,!0));T(ee,{in:async()=>{a(t,!1),await C.update``},children:(m,P)=>{var l=Ce(),n=i(l);F(n,{title:"Fokushantering"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=Be(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(_,!0)),h=e(e(x,!0)),$=e(e(h,!0)),S=e(e($,!0)),w=e(e(c,!0)),A=o(w),j=o(A);M(I(j,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),O=>C=O,()=>C),R(()=>A.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await C.selectLines`*`,await C.update`final _formKey = GlobalKey<FormState>();

// Fokushantering
final _nameFocus = FocusNode();

Form(
    key: _formKey,
    child: Column(
        children: [
            TextFormField(
                autofocus: true,  // Fokusera detta fält när formen visas
                onFieldSubmitted: (_) {
                    // Flytta fokus till nästa fält när användaren trycker Enter/Next
                    _nameFocus.requestFocus();
                },
                /* ... resten */
            ),
            TextFormField(
                focusNode: _nameFocus,
                onFieldSubmitted: (_) {
                    // Submitta formen när användaren trycker Enter/Done på sista fältet
                    if (_formKey.currentState!.validate()) {
                        _formKey.currentState!.save();
                        // TODO
                    }
                },
                /* ... resten */
            ),
        ],
    ),
)`},!1),d("current",_,async()=>{a(t,!0),await C.selectLines`10-17`},!1),d("current",h,async()=>{a(t,!0),await C.selectLines`4,14,19`},!1),d("current",S,async()=>{a(t,!0),await C.selectLines`14,18-28`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var te=e(e(ee,!0));T(te,{in:async()=>{a(t,!1),await H.update``},children:(m,P)=>{var l=Le(),n=i(l);F(n,{title:"SnackBar Användning"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=Pe(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(_,!0)),h=e(e(c,!0)),$=o(h),S=o($);M(I(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),w=>H=w,()=>H),R(()=>$.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await H.update`// Grundläggande SnackBar
ScaffoldMessenger.of(context).showSnackBar(
	SnackBar(
		content: Text('Ändringar sparade'),
		duration: Duration(seconds: 2),
	),
);`},!1),d("current",_,async()=>{a(t,!0),await H.update`// SnackBar med action
ScaffoldMessenger.of(context).showSnackBar(
	SnackBar(
		content: Text('Item borttagen'),
		action: SnackBarAction(
			label: 'Ångra',
			onPressed: () {
				// Återställ borttagningen
				_restoreItem();
			},
		),
		duration: Duration(seconds: 4),
		backgroundColor: Colors.red,
	),
);`},!1),d("current",x,async()=>{a(t,!0),await H.update`// Hantera flera SnackBars
class SnackBarService {
	static void showSuccess(BuildContext context, String message) {
		ScaffoldMessenger.of(context)
			..hideCurrentSnackBar()
			..showSnackBar(
				SnackBar(
					content: Text(message),
					backgroundColor: Colors.green,
					behavior: SnackBarBehavior.floating,
					shape: RoundedRectangleBorder(
						borderRadius: BorderRadius.circular(10),
					),
				),
			);
	}

	static void showError(BuildContext context, String message) {
		ScaffoldMessenger.of(context)
			..hideCurrentSnackBar()
			..showSnackBar(
				SnackBar(
					content: Text(message),
					backgroundColor: Colors.red,
					behavior: SnackBarBehavior.floating,
				),
			);
	}
}`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var ae=e(e(te,!0));T(ae,{in:async()=>{a(t,!1),await K.update``},children:(m,P)=>{var l=Ae(),n=i(l);F(n,{title:"Expanded Widget - Flexibel Utrymmesfördelning"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=Ne(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(_,!0)),h=e(e(x,!0)),$=e(e(h,!0)),S=e(e(c,!0)),w=o(S),A=o(w);M(I(A,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),j=>K=j,()=>K),R(()=>w.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await K.update`// Basic Row with Expanded
Row(
  children: [
    Container(
      width: 100,
      color: Colors.blue,
      child: Text('Fixed'),
    ),
    Expanded(
      child: Container(
        color: Colors.red,
        child: Text('Takes remaining space'),
      ),
    ),
  ],
)`},!1),d("current",x,async()=>{a(t,!0),await K.update`// Multiple Expanded widgets with flex
Column(
  children: [
    Expanded(
      flex: 2,  // Takes 2/3 of space
      child: Container(
        color: Colors.blue,
        child: Center(child: Text('Flex: 2')),
      ),
    ),
    Expanded(
      flex: 1,  // Takes 1/3 of space
      child: Container(
        color: Colors.red,
        child: Center(child: Text('Flex: 1')),
      ),
    ),
  ],
)`},!1),d("current",$,async()=>{a(t,!0),await K.update`// Common use case: App layout
Column(
  children: [
    AppBar(title: Text('My App')),
    Expanded(
      child: ListView(
        children: [
          ListTile(title: Text('Item 1')),
          ListTile(title: Text('Item 2')),
          // More items...
        ],
      ),
    ),
    BottomNavigationBar(items: [/*...*/]),
  ],
)`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var re=e(e(ae,!0));T(re,{in:async()=>{a(t,!1),await V.update``},children:(m,P)=>{var l=Ee(),n=i(l);F(n,{title:"Scrolling i Flutter"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=N(!0),y=i(s);D(y,{children:(k,q)=>{var u=Re(),c=i(u),f=o(c),_=e(e(f,!0)),x=e(e(_,!0)),h=e(e(c,!0)),$=o(h),S=o($);M(I(S,{code:"",lang:"dart",theme:"catppuccin-frappe",options:{duration:600,stagger:15,containerStyle:!1,lineNumbers:!0}}),w=>V=w,()=>V),R(()=>$.hidden=!E(t)),d("current",f,async()=>{a(t,!0),await V.update`SingleChildScrollView(
    physics: BouncingScrollPhysics(),
    child: Column(
        children: [
            for (var i = 0; i < 50; i++)
                ListTile(
                    title: Text('Item $i'),
                    subtitle: Text('Mer information...'),
                ),
        ],
    ),
),`},!1),d("current",_,async()=>{a(t,!0),await V.update`ListView.builder(
    itemCount: items.length,
    itemBuilder: (context, index) {
        return ListTile(
            title: Text(items[index].title),
            subtitle: Text(items[index].subtitle),
            onTap: () {
                // Hantera tap på item
            },
        );
    },
    // Prestanda-optimeringar
    cacheExtent: 100.0, // Cacha items utanför synligt område
    addAutomaticKeepAlives: false, // Förhindra onödig state-bevaring
),`},!1),d("current",x,async()=>{a(t,!0),await V.update`RefreshIndicator(
    onRefresh: () async {
        // Implementera uppdateringslogik här
        await Future.delayed(Duration(seconds: 1));
        setState(() {
            items = newItems;
        });
    },
    child: ListView.builder(
        controller: _scrollController, // För scrollposition
        itemCount: items.length,
        itemBuilder: (context, index) {
            // Ladda mer innehåll när vi når slutet
            if (index == items.length - 1) {
                _loadMoreItems();
            }
            return ListTile(
                title: Text(items[index].title),
            );
        },
    ),
),`},!1),r(k,u)},$$slots:{default:!0}}),r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var le=e(e(re,!0));T(le,{children:(m,P)=>{var l=Ie(),n=i(l);F(n,{title:"Tack för idag!"});var g=e(e(n,!0));B(g,{children:(p,L)=>{var s=Me();r(p,s)},$$slots:{default:!0}}),r(m,l)},$$slots:{default:!0}});var ce=e(e(le,!0)),fe=o(ce),ve=o(fe);ve.nodeValue=oe,r(ue,z)},$$slots:{default:!0}}),r(ie,W)}export{Je as component};
