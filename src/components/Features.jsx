import { Save, Moon, Filter, Zap, Keyboard, Feather } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Save className="w-8 h-8" />,
      title: 'Persistent Storage',
      description: 'Your tasks are automatically saved to your browser. Never lose your progress.',
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: 'Dark Mode',
      description: 'Easy on the eyes with a beautiful dark theme that adapts to your preference.',
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: 'Smart Filters',
      description: 'Quickly switch between all, active, and completed tasks with one click.',
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: 'Keyboard Friendly',
      description: 'Navigate and manage tasks efficiently using keyboard shortcuts.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Built with modern React and Vite for blazing-fast performance.',
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: 'Lightweight',
      description: 'No bloat, no unnecessary features. Just a simple, focused todo app.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to stay organized and productive, without the complexity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
