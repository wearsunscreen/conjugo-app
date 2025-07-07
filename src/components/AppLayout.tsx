'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu, ShieldCheck, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { href: '/', label: 'Verbs', icon: BookOpen },
  { href: '/validator', label: 'Validator', icon: ShieldCheck },
  { href: '/settings', label: 'Settings', icon: Settings },
];

function NavContent({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();
  const activePath = '/' + (pathname.split('/')[1] || '');

  return (
    <>
      <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary mb-6 px-4">
        Conjugaí
      </Link>
      <nav className="grid items-start px-2 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              activePath === item.href && 'bg-accent text-primary',
              isMobile && 'text-lg'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if(isMobile) {
      setOpen(false);
    }
  }, [pathname, isMobile]);


  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 py-4">
          <NavContent />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-card">
               <NavContent isMobile />
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            <Link href="/" className="font-headline text-xl font-bold text-primary">Conjugaí</Link>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
