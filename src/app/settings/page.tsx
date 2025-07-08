'use client';

import { useSettings } from '@/context/SettingsContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { TENSES } from '@/lib/verbs';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  const {
    theme,
    setTheme,
    includeInformal,
    setIncludeInformal,
    tenseVisibility,
    setTenseVisibility,
  } = useSettings();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Settings
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Customize your learning experience.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Display Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label className="text-base font-semibold">Theme</Label>
            <RadioGroup
              value={theme}
              onValueChange={(value) => setTheme(value as 'light' | 'dark')}
              className="flex space-x-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="font-normal">
                  Light
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="font-normal">
                  Dark
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          <div className="space-y-4">
            <Label className="text-base font-semibold">Verb Conjugations</Label>
            <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <Label htmlFor="include-informal" className="font-normal">
                Include 'tu' and 'vós' forms
              </Label>
              <Switch id="include-informal" checked={includeInformal} onCheckedChange={setIncludeInformal} />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <Label className="text-base font-semibold">Visible Tenses</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {TENSES.map((tense) => (
                <div key={tense} className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                  <Label htmlFor={`tense-${tense}`} className="font-normal text-sm">
                    {tense}
                  </Label>
                  <Switch
                    id={`tense-${tense}`}
                    checked={tenseVisibility[tense] ?? false}
                    onCheckedChange={(checked) => {
                      setTenseVisibility((prev) => ({
                        ...prev,
                        [tense]: checked,
                      }));
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
