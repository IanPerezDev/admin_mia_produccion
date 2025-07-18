"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TravelerTable } from "../_components/traveler_table";
import { TravelerFilters } from "../_components/traveler_filters";
import { TravelerDialog } from "../_components/traveler_dialog";
import { Agente } from "@/types/_types";

export function TravelersPage({ agentes }: { agentes: Agente[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-sky-950 my-4">
        Cuentas por cobrar
      </h1>
      <Card>
        <div className="p-6 space-y-4">
          <TravelerFilters onCreateClick={() => setIsDialogOpen(true)} />
          <TravelerTable agentes={agentes} />
        </div>
      </Card>

      <TravelerDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
}
