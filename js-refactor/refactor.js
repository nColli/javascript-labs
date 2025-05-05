function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function charClean(valor) {
  let regex = /^\"|\"$|\\n|\\/gm;
  valor = valor.trim();
  return valor.replace(regex, "");
}

function parseEntrada(entrada) {
  let inQuotes = false;
  let bracketDepth = 0;

  for (let i = 0; i < entrada.length; i++) {
      const char = entrada[i];

      if (char === '"') {
          inQuotes = !inQuotes;
      } else if (char === "{" && !inQuotes) {
          bracketDepth++;
      } else if (char === "}" && !inQuotes) {
          bracketDepth--;
      } else if (char === "," && !inQuotes && bracketDepth === 0) {
          // Separar clave y valor aquí
          const clave = entrada.slice(0, i).trim().replace(/^"|"$/g, "");
          const valor = entrada.slice(i + 1).trim();
          return [clave, valor];
      }
  }

  throw new Error("entrada inválida. Asegúrate de tener una coma principal que separa clave y valor.");
}

function btnHandler(event, comando, idComando) {
  if (event.target.tagName !== "BUTTON") return;
  const accion = event.target.dataset.accion.slice(0, -2);
  const idButton = Number(event.target.dataset.accion.slice(-1));
  if (idButton === idComando && typeof comando[accion] === "function") {
      comando[accion]();
  }
}

class BaseCommandHandler {
	constructor(inputId, textareaId, messageId, dummySpaceId) {
		this.input = document.getElementById(inputId);
		this.textarea = document.getElementById(textareaId);
		this.message = document.getElementById(messageId);
		this.dummySpace = document.getElementById(dummySpaceId);
	}

	init(value) {
		this.input.value = value;
	}

	dateNow() {
		const fecha = new Date();
		const formatoUTC = fecha.toUTCString();
		this.textarea.value += formatoUTC + "\n";
	}

	clear() {
		this.textarea.value = "";
	}

	async avisoMostrar(mensa) {
		this.message.textContent = mensa;
		this.message.style.display = "block";
		this.dummySpace.style.display = "none";
		await sleep(3000);
		this.message.style.display = "none";
		this.dummySpace.style.display = "block";
	}

	funcionStringify() {
		let temp = this.textarea.value;
		this.textarea.value = JSON.stringify(temp);
	}

	funcionParse() {
		let temp = this.textarea.value;
		this.textarea.value = "";
		try {
			temp = charClean(temp);
			let str = JSON.stringify(JSON.parse(temp), null, 4);
			this.textarea.value = str;
		} catch (error) {
			this.avisoMostrar("Failed to parse JSON: " + error.message);
			this.textarea.value = temp;
		}
	}
}

class CookieHandler extends BaseCommandHandler {
	update() {
		document.cookie = this.input.value;
		this.avisoMostrar("Cookie creada: " + document.cookie);
	}

	query() {
		this.textarea.value = "";
		const cookies = document.cookie.split(";");
		for (let cookie of cookies) {
			this.textarea.value += cookie.trim() + "\n";
		}
	}
}

const cookieHandler = new CookieHandler("input-01", "textarea-01", "p-mensaje-01", "dummy-space-01");
document.body.addEventListener("click", (event) => {btnHandler(event, cookieHandler, 1);});
(function (param) {
	cookieHandler.init(param);
})("demo=activo; max-age=3600; path=/");

class SessionHandler extends BaseCommandHandler {
	update() {
		try {
			const [clave, valor] = parseEntrada(this.input.value);
			sessionStorage.setItem(clave, valor);
			this.avisoMostrar("Session Storage creada: " + this.input.value);
		} catch (error) {
			this.avisoMostrar(error.message);
		}
	}

	query() {
		this.textarea.value = "";
		for (let i = 0; i < sessionStorage.length; i++) {
			const clave = sessionStorage.key(i);
			const valor = sessionStorage.getItem(clave);
			this.textarea.value += `${clave}: ${valor}\n`;
		}
	}

	delete() {
		const key = this.input.value.trim().replace(/^['"]|['"]$/g, "");
		sessionStorage.removeItem(key);
		this.avisoMostrar("Deleted: " + key);
	}

	deleteAll() {
		if (confirm("Delete all?")) {
			sessionStorage.clear();
		}
	}
}

const sessionHandler = new SessionHandler("input-02", "textarea-02", "p-mensaje-02", "dummy-space-02");
document.body.addEventListener("click", (event) => {btnHandler(event, sessionHandler, 2);});
(function (param) {
	sessionHandler.init(param);
})("\"key\", \"value\"");


class StorageHandler extends BaseCommandHandler {
	update() {
		try {
			const [clave, valor] = parseEntrada(this.input.value);
      console.log('clave', clave, 'valor', valor);
      
			localStorage.setItem(clave, valor);
			this.avisoMostrar("Local Storage creada: " + this.input.value);
		} catch (error) {
			this.avisoMostrar(error.message);
		}
	}

	query() {
		this.textarea.value = "";
		for (let i = 0; i < localStorage.length; i++) {
			const clave = localStorage.key(i);
			const valor = localStorage.getItem(clave);
			this.textarea.value += `${clave}: ${valor}\n`;
		}
	}

	delete() {
		const key = this.input.value.trim().replace(/^['"]|['"]$/g, "");
		localStorage.removeItem(key);
		this.avisoMostrar("Deleted: " + key);
	}

	deleteAll() {
		if (confirm("Delete all?")) {
			localStorage.clear();
		}
	}
}

const storageHandler = new StorageHandler("input-03", "textarea-03", "p-mensaje-03", "dummy-space-03");
document.body.addEventListener("click", (event) => {btnHandler(event, storageHandler, 3);});
(function (param) {
	storageHandler.init(param);
})("\"key\", \"value\"");