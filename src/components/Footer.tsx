export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark text-primary-foreground/60 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md text-primary-foreground font-mono text-xs">
            <img src="/tulsu.svg"/>
          </span>
          <span>ИПМиКН ТулГУ © {new Date().getFullYear()}</span>
        </div>
        <div className="text-xs text-primary-foreground/40">
          Тульский государственный университет · Институт прикладной математики и компьютерных наук
        </div>
      </div>
    </footer>
  );
}
