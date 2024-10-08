// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			oncurrentfragment?: (event: CustomEvent & { target: EventTarget & T }) => any
			oncurrent?: (event: CustomEvent & { target: EventTarget & T }) => any
		}
	}
}

export {}
