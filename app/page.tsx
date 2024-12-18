import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro />
    </ScrollProvider>
  );
}
