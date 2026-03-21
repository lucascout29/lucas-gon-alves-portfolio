const Footer = () => (
  <footer className="py-8 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} Lucas Gonçalves — Feito com{" "}
      <span className="text-primary">♥</span> e muito código
    </p>
  </footer>
);

export default Footer;
