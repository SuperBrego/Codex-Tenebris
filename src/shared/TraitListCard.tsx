import { Card, Stack } from "react-bootstrap";
import DotRatingField from "./DotRatingField";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  subtitle?: string;
  list: Record<string, number>;
  onChange: (key: string, newValue: number) => void;
}

export default function TraitListCard({ label, subtitle, list, onChange }: Props) {
  if(!list) return <></>;
  const { t } = useTranslation();

  return (
    <Card className="mt-3 mb-3">
      <Card.Header>
        <span>{label}</span>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-center text-center">
        {subtitle && <p>{subtitle}</p>}
        <Stack gap={1} className="justify-content-center">
          {Object.entries(list).map(([key, value]) => (
            <DotRatingField
              key={key}
              label={t(key)}
              value={value}
              disabled={false}
              min={0}
              max={5}
              onChange={(newValue) => onChange(key, newValue)}
            />
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
