import {
  Stethoscope, Building2, ShieldCheck, GraduationCap, Handshake, Target, Zap,
  BedDouble, Pill, Hospital, FlaskConical, ScanLine, FileText, HelpCircle,
} from 'lucide-react';

const ICONS = {
  stethoscope: Stethoscope, building: Building2, shield: ShieldCheck,
  graduation: GraduationCap, handshake: Handshake, target: Target, zap: Zap,
  bed: BedDouble, pill: Pill, hospital: Hospital, flask: FlaskConical,
  scan: ScanLine, file: FileText,
};

// Unknown keys fall back to a neutral icon rather than crashing the render.
export const getIcon = (key) => ICONS[key] ?? HelpCircle;
