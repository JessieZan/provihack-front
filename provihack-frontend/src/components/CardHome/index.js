import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "../ActionButton";
import { useNavigate } from "react-router";
import useGlobal from "../../hooks/useGlobal";

export default function BasicCard({ titulo, categoria }) {
  let navigate = useNavigate();
  let { setCategory } = useGlobal();

  const handleSearchs = () => {
    switch (titulo) {
      case "Mentorias":
        setCategory("mentoria");
        navigate("/search/mentorias");
        break;

      case "Cursos":
        setCategory("cursos");
        navigate("/search/cursos");
        break;

      case "Apoio Psicológico":
        setCategory("psicologico");
        navigate("/search/psicologico");
        break;

      case "Acessoria Jurídica":
        setCategory("juridico");
        navigate("/search/juridico");
        break;

      default:
        break;
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {titulo}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Converse com alguém da área
        </Typography>
        <Typography variant="body2">
          Conheça profissionais e empresas que apoiam a causa LGBTQIA+ e a
          comunidade Trans.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleSearchs()}>Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
