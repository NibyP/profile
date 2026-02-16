export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8 text-center">
      <p className="text-slate-400">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </footer>
  );
}

