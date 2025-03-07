import { useEffect } from "react";

const WeTravelButton = () => {
  useEffect(() => {
    // Cargar el script de WeTravel dinámicamente
    const script = document.createElement("script");
    script.src = "https://cdn.wetravel.com/widgets/embed_checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpiar el script al desmontar el componente
    };
  }, []);

  return (
    <a
      className="wtrvl-checkout_button px-5 py-3 bg-primary text-white rounded-full text-md"
      id="wetravel_button_widget"
      data-env="https://www.wetravel.com"
      data-version="v0.3"
      data-uid="1552850"
      data-uuid="17787032"
      href="https://www.wetravel.com/checkout_embed?uuid=17787032"
    >
      Reservar Ahora
    </a>
  );
};

export default WeTravelButton;
